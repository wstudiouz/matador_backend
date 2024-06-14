import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsTopSectionAboutUsTopSection extends Schema.Component {
  collectionName: 'components_about_us_top_section_about_us_top_sections';
  info: {
    displayName: 'aboutUsTopSection';
  };
  attributes: {
    sectionText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'about us'>;
    title: Attribute.Text & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    descriptionRight: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface AccordionItemProjectsAccordionItemProjects
  extends Schema.Component {
  collectionName: 'components_accordion_item_projects_accordion_item_projects';
  info: {
    displayName: 'accordionItemProjects';
  };
  attributes: {
    title: Attribute.String;
    projectstitle: Attribute.Component<'only-texts.text', true>;
  };
}

export interface AccordionItemAccordionItem extends Schema.Component {
  collectionName: 'components_accordion_item_accordion_items';
  info: {
    displayName: 'accordionItem';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.Text;
    accordionItemProjects: Attribute.Component<'accordion-item-projects.accordion-item-projects'> &
      Attribute.Required;
    btnText: Attribute.String;
    btnUrl: Attribute.String;
    topImg: Attribute.Media<'images'> & Attribute.Required;
    bottomImg: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
  };
  attributes: {};
}

export interface CcteImages extends Schema.Component {
  collectionName: 'components_ccte_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    firstLine: Attribute.Component<'project-images-four-some.first-line'>;
    secondLine: Attribute.Component<'recent-projects-dubility.recent-projects-dubility'> &
      Attribute.Required;
    thirdLine: Attribute.Component<'project-images-four-some.first-line'> &
      Attribute.Required;
    fourthLine: Attribute.Component<'recent-projects-dubility.recent-projects-dubility'> &
      Attribute.Required;
  };
}

export interface ClientClient extends Schema.Component {
  collectionName: 'components_client_clients';
  info: {
    displayName: 'client';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ClientsSectionClientsSection extends Schema.Component {
  collectionName: 'components_clients_section_clients_sections';
  info: {
    displayName: 'clientsSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'our clients'>;
    client: Attribute.Component<'client.client', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface HomePageHeroHomePageHero extends Schema.Component {
  collectionName: 'components_home_page_hero_home_page_heroes';
  info: {
    displayName: 'homePageHero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    background: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface HomePageRecentProjectsRecentProjects extends Schema.Component {
  collectionName: 'components_home_page_recent_projects_recent_projects';
  info: {
    displayName: 'recentProjects';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    projects: Attribute.Component<'ccte.images'>;
  };
}

export interface HomeSectionHomeSection extends Schema.Component {
  collectionName: 'components_home_section_home_sections';
  info: {
    displayName: 'homeSection';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    firstAttribute: Attribute.Component<'project-about-attributes.attributes'> &
      Attribute.Required;
    secondAttribute: Attribute.Component<'project-about-attributes.attributes'> &
      Attribute.Required;
  };
}

export interface OfficeCardOfficeCard extends Schema.Component {
  collectionName: 'components_office_card_office_cards';
  info: {
    displayName: 'officeCard';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    info: Attribute.Text;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface OfficeSectionOfficeSection extends Schema.Component {
  collectionName: 'components_office_section_office_sections';
  info: {
    displayName: 'officeSection';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'our offices'>;
    leftCard: Attribute.Component<'office-card.office-card'> &
      Attribute.Required;
    rightCard: Attribute.Component<'office-card.office-card'> &
      Attribute.Required;
  };
}

export interface OnlyTextsText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'onlyTexts';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ProjectAboutAttributesAttributes extends Schema.Component {
  collectionName: 'components_project_about_attributes_attributes';
  info: {
    displayName: 'attributes';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.Text & Attribute.Required;
  };
}

export interface ProjectAboutAbout extends Schema.Component {
  collectionName: 'components_project_about_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    attributes: Attribute.Component<
      'project-about-attributes.attributes',
      true
    > &
      Attribute.Required;
  };
}

export interface ProjectAfterBeforAfterBefor extends Schema.Component {
  collectionName: 'components_project_after_befor_after_befors';
  info: {
    displayName: 'afterBefor';
    description: '';
  };
  attributes: {
    afterImg: Attribute.Media<'images'> & Attribute.Required;
    beforeImg: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    info: Attribute.Text & Attribute.Required;
  };
}

export interface ProjectBackStageBackstage extends Schema.Component {
  collectionName: 'components_project_back_stage_backstages';
  info: {
    displayName: 'backstage';
    description: '';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ProjectImagesDualityImagesFirstLine extends Schema.Component {
  collectionName: 'components_project_images_duality_images_first_lines';
  info: {
    displayName: 'imagesFirstLine';
  };
  attributes: {
    firstImage: Attribute.Media<'images'> & Attribute.Required;
    secondImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProjectImagesFourSomeFirstLine extends Schema.Component {
  collectionName: 'components_project_images_four_some_first_lines';
  info: {
    displayName: 'firstLine';
    description: '';
  };
  attributes: {
    firstProject: Attribute.Relation<
      'project-images-four-some.first-line',
      'oneToOne',
      'api::project.project'
    >;
    secondProject: Attribute.Relation<
      'project-images-four-some.first-line',
      'oneToOne',
      'api::project.project'
    >;
    thirdProject: Attribute.Relation<
      'project-images-four-some.first-line',
      'oneToOne',
      'api::project.project'
    >;
    fourthProject: Attribute.Relation<
      'project-images-four-some.first-line',
      'oneToOne',
      'api::project.project'
    >;
  };
}

export interface ProjectImagesImages extends Schema.Component {
  collectionName: 'components_project_images_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    imagesFirstLine: Attribute.Component<'project-images-duality.images-first-line'> &
      Attribute.Required;
    imagesSecondLine: Attribute.Media<'images'> & Attribute.Required;
    imagesThirdLine: Attribute.Component<'project-images-duality.images-first-line'> &
      Attribute.Required;
  };
}

export interface ProjectTopMediaTopMedia extends Schema.Component {
  collectionName: 'components_project_top_media_top_medias';
  info: {
    displayName: 'topMedia';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProjectVideoVideo extends Schema.Component {
  collectionName: 'components_project_video_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    description: Attribute.Text;
    secondDescription: Attribute.Text & Attribute.Required;
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface RecentProjectsDubilityRecentProjectsDubility
  extends Schema.Component {
  collectionName: 'components_recent_projects_dubility_recent_projects_dubilities';
  info: {
    displayName: 'recentProjectsDubility';
  };
  attributes: {
    firstProject: Attribute.Relation<
      'recent-projects-dubility.recent-projects-dubility',
      'oneToOne',
      'api::project.project'
    >;
    secondProject: Attribute.Relation<
      'recent-projects-dubility.recent-projects-dubility',
      'oneToOne',
      'api::project.project'
    >;
  };
}

export interface ServiceItemProjectsServiceItemProjects
  extends Schema.Component {
  collectionName: 'components_service_item_projects_service_item_projects';
  info: {
    displayName: 'serviceItemProjects';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    projects: Attribute.Component<'only-texts.text', true> & Attribute.Required;
  };
}

export interface ServicePageAccordionItemsItems extends Schema.Component {
  collectionName: 'components_service_page_accordion_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {};
}

export interface ServicesServiceItem extends Schema.Component {
  collectionName: 'components_service_item_service_items';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'accordion-item.accordion-item'> &
      Attribute.Required;
  };
}

export interface SingleImageSingleImage extends Schema.Component {
  collectionName: 'components_single_image_single_images';
  info: {
    displayName: 'singleImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface StatisticItemStatisticItem extends Schema.Component {
  collectionName: 'components_statistic_item_statistic_items';
  info: {
    displayName: 'statisticItem';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    info: Attribute.Text & Attribute.Required;
  };
}

export interface StudioSectionStudioSection extends Schema.Component {
  collectionName: 'components_studio_section_studio_sections';
  info: {
    displayName: 'studioSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bottomImages: Attribute.Component<'single-image.single-image', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface TeamCardTeamCard extends Schema.Component {
  collectionName: 'components_team_card_team_cards';
  info: {
    displayName: 'teamCard';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    expert: Attribute.Text & Attribute.Required;
  };
}

export interface TeamSectionTeamSection extends Schema.Component {
  collectionName: 'components_team_section_team_sections';
  info: {
    displayName: 'teamSection';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'team structure'>;
    teamMembers: Attribute.Component<'team-card.team-card', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface TextUrlTextUrl extends Schema.Component {
  collectionName: 'components_text_url_text_urls';
  info: {
    displayName: 'textUrl';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface TopMediaCarouselTopMediaCarousel extends Schema.Component {
  collectionName: 'components_top_media_carousel_top_media_carousels';
  info: {
    displayName: 'topMediaCarousel';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface TopMediaVideoTopMediaVideo extends Schema.Component {
  collectionName: 'components_top_media_video_top_media_videos';
  info: {
    displayName: 'topMediaVideo';
  };
  attributes: {
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface TopSectionServicesTopSectionServices extends Schema.Component {
  collectionName: 'components_top_section_services_top_section_services';
  info: {
    displayName: 'topSectionServices';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us-top-section.about-us-top-section': AboutUsTopSectionAboutUsTopSection;
      'accordion-item-projects.accordion-item-projects': AccordionItemProjectsAccordionItemProjects;
      'accordion-item.accordion-item': AccordionItemAccordionItem;
      'category.category': CategoryCategory;
      'ccte.images': CcteImages;
      'client.client': ClientClient;
      'clients-section.clients-section': ClientsSectionClientsSection;
      'hero.hero': HeroHero;
      'home-page-hero.home-page-hero': HomePageHeroHomePageHero;
      'home-page-recent-projects.recent-projects': HomePageRecentProjectsRecentProjects;
      'home-section.home-section': HomeSectionHomeSection;
      'office-card.office-card': OfficeCardOfficeCard;
      'office-section.office-section': OfficeSectionOfficeSection;
      'only-texts.text': OnlyTextsText;
      'project-about-attributes.attributes': ProjectAboutAttributesAttributes;
      'project-about.about': ProjectAboutAbout;
      'project-after-befor.after-befor': ProjectAfterBeforAfterBefor;
      'project-back-stage.backstage': ProjectBackStageBackstage;
      'project-images-duality.images-first-line': ProjectImagesDualityImagesFirstLine;
      'project-images-four-some.first-line': ProjectImagesFourSomeFirstLine;
      'project-images.images': ProjectImagesImages;
      'project-top-media.top-media': ProjectTopMediaTopMedia;
      'project-video.video': ProjectVideoVideo;
      'recent-projects-dubility.recent-projects-dubility': RecentProjectsDubilityRecentProjectsDubility;
      'service-item-projects.service-item-projects': ServiceItemProjectsServiceItemProjects;
      'service-page-accordion-items.items': ServicePageAccordionItemsItems;
      'services.service-item': ServicesServiceItem;
      'single-image.single-image': SingleImageSingleImage;
      'statistic-item.statistic-item': StatisticItemStatisticItem;
      'studio-section.studio-section': StudioSectionStudioSection;
      'team-card.team-card': TeamCardTeamCard;
      'team-section.team-section': TeamSectionTeamSection;
      'text-url.text-url': TextUrlTextUrl;
      'top-media-carousel.top-media-carousel': TopMediaCarouselTopMediaCarousel;
      'top-media-video.top-media-video': TopMediaVideoTopMediaVideo;
      'top-section-services.top-section-services': TopSectionServicesTopSectionServices;
    }
  }
}
