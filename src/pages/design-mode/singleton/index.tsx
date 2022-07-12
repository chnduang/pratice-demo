/*
 * @Author: QD
 * @Date: 2022-07-11 14:51:33
 * @Description: 单例模式
 */

class SingleTon {
  private static instance: SingleTon | null = null;
  private constructor() {}
  public static getInstance(): SingleTon {
    if (this.instance === null) {
      this.instance = new SingleTon();
    }
    return this.instance;
  }
}

const childInstance = SingleTon.getInstance();
