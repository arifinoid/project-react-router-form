import React from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

const contents = [
  {
    title: "autocomplete v.3.1.0",
    image: "images/autocomplete.png",
    meta: "images/primefaces.png",
    description: "AutoComplete is an input compone..."
  },
  {
    title: "button v0.86.0",
    image: "images/button.png",
    meta: "images/semantic.png",
    description: "A Button indicates a possible user ac..."
  },
  {
    title: "chart v2.6.5",
    image: "images/chartv265.png",
    meta: "images/grommet.png",
    description: "A graphical chart."
  },
  {
    title: "chart v3.1.0",
    image: "images/chartv310.png",
    meta: "images/primefaces.png",
    description: "Chart component are based on Ch..."
  },
  {
    title: "data-table v2.6.5",
    image: "images/datatable.png",
    meta: "images/grommet.png",
    description: "A driven data table"
  },
  {
    title: "progress-bar v0.9.6",
    image: "images/progressbar.png",
    meta: "images/digiaonline.png",
    description: "Show your progress. A simple way t..."
  }
];

export const CardBla = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px auto",
        flexWrap: "wrap",
        width: "1000px"
      }}
    >
      {contents.map(content => (
        <Card
          style={{ width: 300, margin: "10px 10px" }}
          cover={<img alt={content.title} src={content.image} />}
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
        >
          <Meta
            avatar={<Avatar src={content.meta} />}
            title={content.title}
            description={content.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default CardBla;
