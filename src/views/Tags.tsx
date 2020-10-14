import Layout from "../components/Layout";
import React from "react";
import {useTags} from "useTags";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";
import {Center} from "../components/Center";

function Tags() {
    const {tags,addTag} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={"/tags/" + tag.id}>
                            {tag.name}
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}




const Space = styled.div`
  height:16px;

`;
const TagList = styled.ol`
  font-size:16px;
  >li{
    border-bottom: 1px solid #d5d5d9;
    padding:12px 16px 12px 0;
    margin-left: 16px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    >a{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding:12px 16px 12px 0;
    }
  }

`;
export default Tags;