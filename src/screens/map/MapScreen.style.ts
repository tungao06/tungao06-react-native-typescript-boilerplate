import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  body: ViewStyle;
  text: ViewStyle;
  map: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    body: {
      flex: 1,
      alignItems: "center",
    },
    text: {
      fontSize: 40,
      margin: 10,
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });
};
