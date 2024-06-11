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

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
  };
  attributes: {};
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

export interface HomeSectionHomeSection extends Schema.Component {
  collectionName: 'components_home_section_home_sections';
  info: {
    displayName: 'homeSection';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    yearInfo: Attribute.Text & Attribute.Required;
    year: Attribute.String & Attribute.Required;
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

export interface ServicesItemServicesItem extends Schema.Component {
  collectionName: 'components_services_item_services_items';
  info: {
    displayName: 'servicesItem';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    btnText: Attribute.String & Attribute.Required;
    bntUrl: Attribute.String & Attribute.Required;
    topImg: Attribute.Media<'images'> & Attribute.Required;
    bottomImg: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ServicesServiceItem extends Schema.Component {
  collectionName: 'components_service_item_service_items';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    item: Attribute.Component<'services-item.services-item'> &
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
      'category.category': CategoryCategory;
      'client.client': ClientClient;
      'clients-section.clients-section': ClientsSectionClientsSection;
      'hero.hero': HeroHero;
      'home-page-hero.home-page-hero': HomePageHeroHomePageHero;
      'home-section.home-section': HomeSectionHomeSection;
      'office-card.office-card': OfficeCardOfficeCard;
      'office-section.office-section': OfficeSectionOfficeSection;
      'services-item.services-item': ServicesItemServicesItem;
      'services.service-item': ServicesServiceItem;
      'single-image.single-image': SingleImageSingleImage;
      'statistic-item.statistic-item': StatisticItemStatisticItem;
      'studio-section.studio-section': StudioSectionStudioSection;
      'team-card.team-card': TeamCardTeamCard;
      'team-section.team-section': TeamSectionTeamSection;
      'text-url.text-url': TextUrlTextUrl;
      'top-section-services.top-section-services': TopSectionServicesTopSectionServices;
    }
  }
}
