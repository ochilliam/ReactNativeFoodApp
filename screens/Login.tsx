import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { Button } from "../components/Button";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <ImageBackground
          style={styles.bgImage}
          resizeMode="cover"
          source={images.loginBackground}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
            colors={[COLORS.transparent, COLORS.black]}
          >
            <Text style={styles.headerSlug}>
              Cooking a Delicious Food Easily!
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const onPressLogin = () => navigation.replace("Home");
  const onPressSignup = () => navigation.replace("Home");

  const renderDetail = () => (
    <View style={styles.detailContainer}>
      <Text style={styles.detail}>
        Discover more than 12000 food recipes in your hands and cooking it
        easily!
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          text="Login"
          containerStyle={{ paddingVertical: 18, borderRadius: 20 }}
          onPress={onPressLogin}
          colors={[COLORS.darkGreen, COLORS.lime]}
        />

        <Button
          containerStyle={{
            marginTop: SIZES.radius,
            paddingVertical: 18,
            borderRadius: 20,
            borderColor: COLORS.darkLime,
            borderWidth: 1,
          }}
          text="Sign up"
          onPress={onPressSignup}
          colors={[]}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    height: SIZES.height > 700 ? "60%" : "55%",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  headerSlug: {
    width: "80%",
    color: COLORS.white,
    lineHeight: 45,
    ...FONTS.largeTitle,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  detail: {
    marginTop: SIZES.radius,
    width: "70%",
    color: COLORS.gray,
    ...FONTS.body3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;
