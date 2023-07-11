export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface navbarItem {
  routerLink: string;
  icon: string;
  label: string;
}

export const navbarData: navbarItem[] = [
  { routerLink: '', icon: 'bx bxs-dashboard', label: 'Dashboard' },
  {
    routerLink: '/recorrentes',
    icon: 'bx bx-money-withdraw',
    label: 'Contas Recorrentes',
  },
];
