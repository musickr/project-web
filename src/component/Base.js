import React from 'react';
import { Layout, Menu, } from 'antd';

class Base extends React.Component{
    constructor(props){
        super(props);
        this.state={
            css:{
                header:'header',
                logo:'logo',
                content:'content',
                footer:'footer',
            },
            menuList:[
                {
                    title:"Home",
                }
            ]
        }
    }
    render() {
        return(
            <React.Fragment>
                <Layout>
                    <Layout.Header className={this.state.css.header}>
                        <div className={this.state.css.logo} >musickr</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            {this.state.menuList.map((item,index)=>{
                                return (
                                    <Menu.Item key={index}>{item.title}</Menu.Item>
                                );
                            })}
                        </Menu>
                    </Layout.Header>
                    <Layout.Content
                        className={this.state.css.content}
                    >
                        <div style={{ background: '#fff', padding: 24 }}>
                            {this.props.children}
                        </div>
                    </Layout.Content>
                    <Layout.Footer
                        className={this.state.css.footer}
                    >
                        technology by kbphp.com <br /> 蜀ICP备19010142号
                    </Layout.Footer>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Base;