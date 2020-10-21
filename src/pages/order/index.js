import React from "react";
import {
  Card,
  Button,
  Table,
  Form,
  Select,
  Modal,
  DatePicker,
  message,
} from "antd";
export default class Order extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Card>
            <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        </Card> */}
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.openOrderDetail}>
            订单详情
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: 10 }}
            onClick={this.handleConfirm}
          >
            结束订单
          </Button>
        </Card>
      </div>
    );
  }
}
