/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-04-10 13:29:13
 * @LastEditTime: 2021-11-06 18:28:33
 * @LastEditors: rodchen
 */
import React from "react";
import { RouteComponentProps, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch();

  console.log("history", history)
  console.log("location", location)
  console.log("params", params)
  console.log("routeMatch", routeMatch)
  
  return <h1>路游路线详情页面, 路线ID: {props.match.params.touristRouteId}</h1>;
};
