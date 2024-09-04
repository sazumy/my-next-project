import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("middleware: " + request.url);

  return NextResponse.next();
};

// NOTE: 右辺の{}はマッチャーと呼ばれ、空のオブジェクトを指定することで、全てのリクエストに対してこのmiddlewareを適用することを意味します。
export const config = {};
