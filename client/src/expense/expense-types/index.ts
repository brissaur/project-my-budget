import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import GpsFixed from "@material-ui/icons/GpsFixed";

interface IType {
  value: string;
  icon: any;
}

export const TYPE_TO_ICON = {
  alcohol: LocalBarIcon,
  restaurant: RestaurantIcon,
  supermarket: ShoppingCart,
  "fray-fixx": GpsFixed
};

export const TYPES: IType[] = [
  "alcohol",
  "restaurant",
  "supermarket",
  "fray-fixx"
].map(key => ({ value: key, icon: TYPE_TO_ICON[key] }));
