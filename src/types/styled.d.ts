import "styled-components";
import type { AliasToken } from "antd/es/theme/interface";

declare module "styled-components" {
  export interface DefaultTheme extends AliasToken {
    readonly __ant_alias_token_brand__?: undefined;
  }
}
