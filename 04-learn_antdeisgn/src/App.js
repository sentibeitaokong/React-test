import { Button, ConfigProvider } from 'antd';
import React from 'react';
import { Divider } from 'antd';
const App= () => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#00b96b',
            },
        }}
    >
        <Button type='primary'>按钮</Button>
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider dashed />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
        </>
    </ConfigProvider>
);

export default App;