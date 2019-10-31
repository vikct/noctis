export class MenuItem {
  title: string;
  route: string;
  icon?: string;
  group?: boolean;
  children?: MenuItem[];
  pathMatch?: string = 'full';
  home?: boolean;
}
