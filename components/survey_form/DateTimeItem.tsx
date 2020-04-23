import * as React from 'react';
import { Form, DatePicker, TimePicker } from 'antd';
import { ItemModelComponent } from '../models/model';
import { Rule } from 'rc-field-form/lib/interface';

interface Props {
    item     : ItemModelComponent;
    rules?   : Rule;
    onlyTime?: boolean;
}

const DateTimeItem: React.FunctionComponent<Props> = ({item, rules, onlyTime}) => {
    return (
        <Form.Item
            className="salt"
            name={item.name}
            rules={[{ required: item.required, ...rules }]}
            label={item.label} >

            {
                (onlyTime) ?
                    <TimePicker placeholder={item.placeholder} style={{width: '100%'}} />
                :
                    <DatePicker placeholder={item.placeholder} style={{width: '100%'}} />
            }

        </Form.Item>
    );
}

export default DateTimeItem;
