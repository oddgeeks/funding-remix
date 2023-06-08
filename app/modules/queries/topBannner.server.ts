import type { PromotionalBannerType } from "~/types";

export async function getPromotionBannerData(): Promise<PromotionalBannerType> {
  const bannerData =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/stub/top-banner"
      : "https://my-funded-fx-cms.herokuapp.com/api/top-banner/?populate=*";

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
