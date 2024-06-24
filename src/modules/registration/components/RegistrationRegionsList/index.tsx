import {regions} from "@utils/data";

const RegionsList = () => (
	<>
		{regions.map((item) => (
			<option key={item.value} value={item.value}>
				{item.title}
			</option>
		))}
	</>
);
export default RegionsList;
