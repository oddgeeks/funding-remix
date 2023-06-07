export interface PromotionBannerSlider {
  id: number;
  __component: string;
  SliderText: string;
}
export type PromotionalBannerType = {
  attributes: {
    CouponCode: string;
    CouponLink: string;
    Discount: string;
    OfferEndTime: string;
    Profit: string;
    PromotionBannerSlider: PromotionBannerSlider[];
    SubTitle: string;
    Title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};

export type PromotionalBanners = {
  data: PromotionalBannerType[];
  id: number;
};

export type descriptionFeatures = {
  id: number;
  __component: string;
  Feature: string;
};
export type heroSectionType = {
  id: number;
  attributes: {
    Title: string;
    subTitle: string;
    getFundedLink: string;
    discordUrl: string;
    Description: string;
    featuredVideoUrl: string;
    Stars: number;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    descriptionFeatures: descriptionFeatures[];
  };
};

export type heroSection = {
  data: heroSectionType[];
  id: number;
};

export type AccordionType = {
  id: number;
  __component: string;
  Question: string;
  Answer: string;
};
export type FaqsType = {
  attributes: {
    Title: string;
    subTitle: string;
    faqSiteLink: string;
    Accordion: AccordionType[];
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};

export type getStartedType = {
  attributes: {
    Title: string;
    subTitle: string;
    discordLink: string;
    coverImageUrl: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
};
export type TestimonialType = {
  length?: number;
  id: number;
  review: string;
  user: string;
  avatar: string;
};

export type getTestimonialType = {
  attributes: {
    title: string;
    subTitle: string;
    trustPilotLink: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    testimonial: TestimonialType[];
  };
  id: number;
};