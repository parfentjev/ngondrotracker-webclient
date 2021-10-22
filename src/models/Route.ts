type Route = {
  label: string;
  route: string;
  navigationMenu?: boolean;
  footerMenu?: boolean;
  visibleForUsers?: boolean;
  visibleForGuests?: boolean;
};

export default Route;
