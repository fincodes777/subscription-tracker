import { Link } from "expo-router";
import { Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link
        href="/(auth)/signUp"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Create an account
      </Link>
    </View>
  );
};

export default signIn;
