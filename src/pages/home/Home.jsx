import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import {userData} from '../../dummyData'
import WidgetSm from "../../components/widgetSm/widgetSm"
import WidgetLg from "../../components/widgetLg/widgetLg"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
            </div>
        </div>
    )
}
