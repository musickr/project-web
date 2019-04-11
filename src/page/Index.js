import React from 'react';
import Base from '../component/Base';
import { Collapse, Button } from "antd";
import Editor from "../component/Editor";

const Panel = Collapse.Panel;
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articleList:[
                {title:'文章标题',content:'这是我的文章内容'},
                {title:'文章标题',content:'这是我的文章内容'},
                {title:'文章标题',content:'这是我的文章内容'},
            ]
        };
    }


    render() {
        return(
        <React.Fragment>
            <Base >
                <Collapse
                    accordion={true}
                    bordered={false}
                    defaultActiveKey={(this.state.articleList.length-1).toString()}
                >
                    {this.state.articleList.map((item,index)=>{
                        return(
                            <Panel
                                header={item.title}
                                key={index}
                            >
                                {item.content}
                            </Panel>
                        );
                    })}
                </Collapse>
                <Editor/>
                <Button type="primary" block>提交</Button>
            </Base>
        </React.Fragment>
        )
  }
}

export default Index;