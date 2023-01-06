interface IToolsFormat {
  name: string;
  contact?: string;
}

export interface IServiceCardProps {
  image: string;
  title: string;
  description: string;
  subtitle: string;
  tools: IToolsFormat[];
  onClickToolContact: () => {};
}

export interface IServiceCardConfig {
  image: string;
  title: string;
  description: string;
  subtitle: string;
  tools: IToolsFormat[];
}
