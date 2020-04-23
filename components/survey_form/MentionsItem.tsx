import * as React from "react";
import { Form, Mentions } from "antd";
import axios from "axios";
import { v4 as uid } from "uuid";
import { ItemModelComponent, OptionModelComponent } from "../models/model";

const { Option, getMentions } = Mentions;

const checkMention = async (rule: any, value: any, callback: any) => {
  const mentions = getMentions(value);
  if (mentions.length == 0) {
    throw new Error("Please select a option.");
  }
};

const MentionsItem: React.FunctionComponent<ItemModelComponent> = (item) => {
  let [opts, setOpts] = React.useState<Array<OptionModelComponent>>(
    item.options || []
  );
  let [flag, setFlag] = React.useState(true);
  if (item.field && flag) {
    axios
      .post("/get_data_form", { field: item.field })
      .then(({ data: { data } }) => {
        let aux: Array<OptionModelComponent> = [];
        for (let opt of data) aux.push({ key: opt, value: opt, label: opt });
        setOpts(aux);
      });
    setFlag(false);
  }
  return (
    <Form.Item
      name={item.name}
      label={item.label}
      className="salt"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      rules={[
        {
          required: item.required,
          validator: checkMention,
        },
      ]}
    >
      <Mentions rows={3} placeholder={item.placeholder}>
        {opts.map((item) => (
          <Option key={uid()} value={item.value.trim()}>
            {item.label.trim()}
          </Option>
        ))}
      </Mentions>
      {/* <small className="note-mentions">You can use @ to ref here</small> */}
    </Form.Item>
  );
};

export default MentionsItem;
