import * as React from 'react';
import { Form, Upload } from 'antd';
import { ItemModelComponent } from '../models/model';
import { InboxOutlined } from '@ant-design/icons';

const FileUpload: React.FunctionComponent<ItemModelComponent> = (item) => {
    return (
        <Form.Item label={item.label} className="salt" rules={[{ required: item.required }]}>
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={(e: any) => console.log(e)} noStyle>
                <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
            </Form.Item>
        </Form.Item>
    );
}

export default FileUpload;
