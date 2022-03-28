import type { ResourceTagType } from 'core/entities/Resource';

export interface NavbarItemProps {
  icon: ResourceTagType;
  label: string;
  route: string;
}
