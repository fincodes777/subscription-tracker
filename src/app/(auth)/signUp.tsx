import { Link } from "expo-router";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link
        href="/(auth)/signIn"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Sign in
      </Link>
    </View>
  );
};

export default signUp;
