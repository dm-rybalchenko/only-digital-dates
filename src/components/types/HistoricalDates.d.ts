interface ICircleProp {
	current: number;
	content: IContent[];
	setCurrent: (arg: number) => void;
}

interface ISliderCategotiesProp {
	current: number;
	content: IContent[];
	setCurrent: (arg: number) => void;
	nextCategory: () => void;
    prevCategory: () => void;
}

interface IContent {
	category: string;
	dates: ICategory[];
}

interface ICategory {
	title: number;
	description: string;
}

