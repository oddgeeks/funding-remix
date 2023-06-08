import type { getTestimonialType } from "~/types";

export async function getTestimonialData(): Promise<getTestimonialType> {
  const bannerData =
    process.env.NODE_ENV === "development"
      ? "https://my-funded-fx-cms.herokuapp.com/api/testimonial/?populate=*"
      : "https://my-funded-fx-cms.herokuapp.com/api/testimonial/?populate=*";

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





