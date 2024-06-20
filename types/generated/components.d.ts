import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsPageClientSection extends Schema.Component {
  collectionName: 'components_about_us_page_client_sections';
  info: {
    displayName: 'clientSection';
  };
  attributes: {
    title: Attribute.String;
    clients: Attribute.Component<'about-us-page.client', true>;
  };
}

export interface AboutUsPageClient extends Schema.Component {
  collectionName: 'components_about_us_page_clients';
  info: {
    displayName: 'client';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface AboutUsPageHero extends Schema.Component {
  collectionName: 'components_about_us_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface AboutUsPageOfficeCard extends Schema.Component {
  collectionName: 'components_about_us_page_office_cards';
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

export interface AboutUsPageOfficeSection extends Schema.Component {
  collectionName: 'components_about_us_page_office_sections';
  info: {
    displayName: 'officeSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    leftCard: Attribute.Component<'about-us-page.office-card'> &
      Attribute.Required;
    rightCard: Attribute.Component<'about-us-page.office-card'>;
  };
}

export interface AboutUsPageStatisticCard extends Schema.Component {
  collectionName: 'components_about_us_page_statistic_cards';
  info: {
    displayName: 'statisticCard';
  };
  attributes: {
    text: Attribute.String;
    info: Attribute.Text;
  };
}

export interface AboutUsPageTeamMember extends Schema.Component {
  collectionName: 'components_about_us_page_team_members';
  info: {
    displayName: 'teamMember';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String;
    position: Attribute.String;
  };
}

export interface AboutUsPageTeamSection extends Schema.Component {
  collectionName: 'components_about_us_page_team_sections';
  info: {
    displayName: 'teamSection';
  };
  attributes: {
    title: Attribute.String;
    teamMembers: Attribute.Component<'about-us-page.team-member', true> &
      Attribute.Required;
  };
}

export interface AboutUsPageTopSection extends Schema.Component {
  collectionName: 'components_about_us_page_top_sections';
  info: {
    displayName: 'topSection';
  };
  attributes: {
    sectionName: Attribute.String & Attribute.Required;
    title: Attribute.Text;
    leftDescription: Attribute.Text;
    rightDescription: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'>;
  };
}

export interface FooterAddress extends Schema.Component {
  collectionName: 'components_footer_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    address: Attribute.String;
    info: Attribute.Text & Attribute.Required;
  };
}

export interface FooterSocialLink extends Schema.Component {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomePageAttribute extends Schema.Component {
  collectionName: 'components_home_page_attributes';
  info: {
    displayName: 'attribute';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.Text;
  };
}

export interface HomePageHero extends Schema.Component {
  collectionName: 'components_home_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface HomePageRecentProjects extends Schema.Component {
  collectionName: 'components_home_page_recent_projects';
  info: {
    displayName: 'recentProjects';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomePageSection extends Schema.Component {
  collectionName: 'components_home_page_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    projectsNumber: Attribute.Component<'home-page.attribute'> &
      Attribute.Required;
    experience: Attribute.Component<'home-page.attribute'>;
  };
}

export interface ProjectAboutSection extends Schema.Component {
  collectionName: 'components_project_about_sections';
  info: {
    displayName: 'aboutSection';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    attributes: Attribute.Component<'home-page.attribute', true>;
  };
}

export interface ProjectAfterBefore extends Schema.Component {
  collectionName: 'components_project_after_befores';
  info: {
    displayName: 'afterBefore';
  };
  attributes: {
    text: Attribute.String;
    info: Attribute.Text;
    afterImg: Attribute.Media<'images'> & Attribute.Required;
    beforeImg: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProjectBackStageSection extends Schema.Component {
  collectionName: 'components_project_back_stage_sections';
  info: {
    displayName: 'backStageSection';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ProjectBottomMailTo extends Schema.Component {
  collectionName: 'components_project_bottom_mail_tos';
  info: {
    displayName: 'bottomMailTo';
  };
  attributes: {
    text: Attribute.Text;
    email: Attribute.Email;
  };
}

export interface ProjectCarousel extends Schema.Component {
  collectionName: 'components_project_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface ProjectFirstLine extends Schema.Component {
  collectionName: 'components_project_first_lines';
  info: {
    displayName: 'firstLine';
  };
  attributes: {
    firstImg: Attribute.Media<'images'> & Attribute.Required;
    secondImg: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProjectImagesSection extends Schema.Component {
  collectionName: 'components_project_images_sections';
  info: {
    displayName: 'imagesSection';
  };
  attributes: {
    firstLine: Attribute.Component<'project.first-line'>;
    secondLine: Attribute.Media<'images'> & Attribute.Required;
    thirdLine: Attribute.Component<'project.first-line'>;
  };
}

export interface ProjectTopMedia extends Schema.Component {
  collectionName: 'components_project_top_medias';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProjectVideoSection extends Schema.Component {
  collectionName: 'components_project_video_sections';
  info: {
    displayName: 'videoSection';
  };
  attributes: {
    video: Attribute.Media<'videos'> & Attribute.Required;
    leftDescription: Attribute.Text;
    rightDescription: Attribute.Text;
  };
}

export interface ProjectVideo extends Schema.Component {
  collectionName: 'components_project_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface ServicePageImage extends Schema.Component {
  collectionName: 'components_service_page_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ServicePageProjectNames extends Schema.Component {
  collectionName: 'components_service_page_project_names';
  info: {
    displayName: 'project-names';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ServicePageProjects extends Schema.Component {
  collectionName: 'components_service_page_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    title: Attribute.String;
    projectNames: Attribute.Component<'service-page.project-names', true>;
  };
}

export interface ServicePageServiceItem extends Schema.Component {
  collectionName: 'components_service_page_service_items';
  info: {
    displayName: 'serviceItem';
  };
  attributes: {
    text: Attribute.Text;
    description: Attribute.Text;
    btnText: Attribute.String;
    email: Attribute.Email;
    topImg: Attribute.Media<'images'> & Attribute.Required;
    bottomImg: Attribute.Media<'images'> & Attribute.Required;
    projects: Attribute.Component<'service-page.projects'>;
  };
}

export interface ServicePageServicesSection extends Schema.Component {
  collectionName: 'components_service_page_services_sections';
  info: {
    displayName: 'servicesSection';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ServicePageServices extends Schema.Component {
  collectionName: 'components_service_page_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.String;
    item: Attribute.Component<'service-page.service-item'>;
  };
}

export interface ServicePageStudioSection extends Schema.Component {
  collectionName: 'components_service_page_studio_sections';
  info: {
    displayName: 'studioSection';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
    bottomImages: Attribute.Component<'service-page.image', true> &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface ServicePageTopSection extends Schema.Component {
  collectionName: 'components_service_page_top_sections';
  info: {
    displayName: 'topSection';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us-page.client-section': AboutUsPageClientSection;
      'about-us-page.client': AboutUsPageClient;
      'about-us-page.hero': AboutUsPageHero;
      'about-us-page.office-card': AboutUsPageOfficeCard;
      'about-us-page.office-section': AboutUsPageOfficeSection;
      'about-us-page.statistic-card': AboutUsPageStatisticCard;
      'about-us-page.team-member': AboutUsPageTeamMember;
      'about-us-page.team-section': AboutUsPageTeamSection;
      'about-us-page.top-section': AboutUsPageTopSection;
      'footer.address': FooterAddress;
      'footer.social-link': FooterSocialLink;
      'home-page.attribute': HomePageAttribute;
      'home-page.hero': HomePageHero;
      'home-page.recent-projects': HomePageRecentProjects;
      'home-page.section': HomePageSection;
      'project.about-section': ProjectAboutSection;
      'project.after-before': ProjectAfterBefore;
      'project.back-stage-section': ProjectBackStageSection;
      'project.bottom-mail-to': ProjectBottomMailTo;
      'project.carousel': ProjectCarousel;
      'project.first-line': ProjectFirstLine;
      'project.images-section': ProjectImagesSection;
      'project.top-media': ProjectTopMedia;
      'project.video-section': ProjectVideoSection;
      'project.video': ProjectVideo;
      'service-page.image': ServicePageImage;
      'service-page.project-names': ServicePageProjectNames;
      'service-page.projects': ServicePageProjects;
      'service-page.service-item': ServicePageServiceItem;
      'service-page.services-section': ServicePageServicesSection;
      'service-page.services': ServicePageServices;
      'service-page.studio-section': ServicePageStudioSection;
      'service-page.top-section': ServicePageTopSection;
    }
  }
}
