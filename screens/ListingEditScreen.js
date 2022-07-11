import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import CategoryPickerItem from "../components/CategoryPickerItem";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormPicker from "../components/forms/FormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import useLocation from "../components/hooks/useLocation";
import listingsApi from "../components/api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "floor-lamp",
    color: "blue",
  },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "saddlebrown",
    icon: "camera",
  },
  { label: "Games", value: 4, backgroundColor: "lightgreen", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "lightblue",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "blue", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "purple",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "pink",
    icon: "book-open-blank-variant",
  },
  { label: "Other", value: 9, backgroundColor: "gray", icon: "calendar" },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) return alert("Could not save the listing.");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
