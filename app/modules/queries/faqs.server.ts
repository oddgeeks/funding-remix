import type { FaqsType } from "~/types";

export async function getAcoordianData(): Promise<FaqsType> {
  const bannerData =
    process.env.NODE_ENV === "development"
      ? "https://my-funded-fx-cms.herokuapp.com/api/faq/?populate=*"
      : "https://my-funded-fx-cms.herokuapp.com/api/faq/?populate=*";

  try {
    const response = await fetch(bannerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const res = await response.json();
      return res.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}