import type { heroSectionType } from "~/types";

export async function getHeroSection(): Promise<heroSectionType> {
  const bannerData =
    process.env.NODE_ENV === "development"
      ? "https://my-funded-fx-cms.herokuapp.com/api/hero-section/?populate=*"
      : "https://my-funded-fx-cms.herokuapp.com/api/hero-section/?populate=*";

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
