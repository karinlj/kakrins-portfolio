export interface IFilter {
  id: number;
  name: string;
  isChecked: boolean | undefined;
}

export interface IAbout {
  fields: {
    heading: string;
    text: string;
    aboutContent: any;
  };
}
export interface ISkill {
  fields: {
    icon: string;
    title: string;
    content: any;
  };
  sys: {
    id: number;
  };
}

export interface IProject {
  fields: {
    title: string;
    link: string;
    image: {
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    };
    releaseDate: string;
    techniques: string[];
    description: string;
    acknowledgement: string;
  };
  sys: {
    id: string;
  };
}

export interface ISubItem {
  heading: string;
  content: string;
}
export interface ICurriculumItem {
  fields: {
    title: string;
    titleLink: string;
    date: string;
    sortDate: string;
    description: string;
    siteList: string[];
    subItemList: ISubItem[];
  };
  sys: {
    id: number;
  };
}
