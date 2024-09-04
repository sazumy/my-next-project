import { match } from "assert";
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// NOTE: 右辺の{}はマッチャーと呼ばれ、空のオブジェクトを指定することで、全てのリクエストに対してこのmiddlewareを適用することを意味します。
export const config = { matcher: ["/(.*)"] };
