import { shallowMount } from "@vue/test-utils"; // vue提供的快速测试的方法
import { expect } from "chai";

import Button from "@/packages/button";
import Icon from "@/packages/icon";

describe("button", () => {
  it("1.测试button是否正常显示内容", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "难凉热血"
      }
    });
    expect(wrapper.text()).to.eq("难凉热血");
  });
  it("2.测试icon正常显示", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "nlrx-icon": Icon 
      },
      propsData: {
        icon: "edit"
      }
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-edit");
  });
  it("3.测试loading时 按钮是禁用状态", () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        "nlrx-icon": Icon 
      },
      propsData: {
        loading: true
      }
    });
    expect(wrapper.find("use").attributes("href")).to.eq("#icon-loading");
    expect(wrapper.find("button").attributes("disabled")).to.eq("disabled");
  });
  it("4.测试按钮能否正常点击", () => {
    const wrapper = shallowMount(Button, {
      
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click").length).to.eq(1);
  });
  it("5.按钮传入position是否正常显示", () => {
    const wrapper = shallowMount(Button, {
      attachToDocument: true, // 将组件挂载到浏览器上
      stubs: {
        "nlrx-icon": Icon 
      },
      slots: {
        default: "难凉热血"
      },
      propsData: {
        position: "left",
        icon: "edit"
      }
    });
    let ele = wrapper.vm.$el.querySelector(".content");
    expect(getComputedStyle(ele).order).to.eq("2");
    wrapper.setProps({ position: "right" }); // 设置props 必须要在下一个事件环去取值
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq("1");
    });
  });
});
