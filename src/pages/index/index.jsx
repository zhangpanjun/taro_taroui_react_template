import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.module.scss";

const Index = (props) => {
  const { home } = props;
  console.log("store数据", home);
  return (
    <View className="index">
      <Text>Hello world!</Text>
      <AtButton type="primary">I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type="primary" circle>
        支持
      </AtButton>
      <Text>共建？</Text>
      <AtButton type="secondary" circle>
        来
      </AtButton>
    </View>
  );
};
export default connect(({ home }) => ({
  home,
}))(Index);
