import * as React from 'react';
import { Form, Input, Avatar, Badge } from 'antd';
import { ItemModelComponent } from '../models/model';
import { UserOutlined } from '@ant-design/icons';

const PictureUploadUrl: React.FunctionComponent<ItemModelComponent> = (item) => {
    let [open, setOpen] = React.useState(false);
    let [image, setImage] = React.useState(false);
    let [url, setUrl]   = React.useState("");

    React.useEffect(() => {
        let verify = new Image();
        verify.onabort = verify.onerror = () => {
            setImage(false);
        }
        verify.onload = () => {
            setImage(true);
            setOpen(false);
        }
        verify.src = url;
    }, [url])

    return (
        <Form.Item
            className="salt"
            rules={[{ required: item.required }]}
            label={item.label}>
            <div className="wrapper-picture" onClick={() => setOpen(!open)}>
                <Badge count="+">
                    {
                        (image) ?
                            <Avatar src={url} shape="square" size={64} />
                        :
                            <Avatar icon={(<UserOutlined />)} shape="square" size={64} />
                    }
                </Badge>
            </div>
            {
                (open) ?
                    <Input
                        placeholder={item.placeholder}
                        name={item.name}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                :
                    null
            }
        </Form.Item>
    );
}

export default PictureUploadUrl;
