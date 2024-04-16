import React from 'react';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import useMasonry from "../../hooks/use-masonry";
import WorkFilter from "../../components/Work/WorkFilter";
import WorkItem from "../../components/Work/WorkItem";
import workData from '../../data/work/workDetails.json';
import { slugify } from "../../utils";
import BrandContainer from '../Brand/BrandContainer';


const Portfolio = () => {

    // Isotope Categories list JS

    const { categories } = useMasonry(workData, ".mesonry-list", ".masonry-grid", ".messonry-button", ".messonry-button button")


    return (
        <div className="section section-padding ag-masonary-wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <SectionTitleTwo
                            subTitle="Portfolios"
                            title="Our Partners"
                        />
                    </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 mesonry-list">
                    <div className="resizer col"></div>
                    {workData && workData.slice(0, 3).map(portfolio => (
                        <div key={portfolio.id} className={`col masonry-grid ${portfolio.categories.map(cat => slugify(cat)).join(" ")}`}>
                            <WorkItem portfolio={portfolio} />
                        </div>
                    ))}
                </div>
                <div><h3 className='mb-5'>Selected customers</h3>
                    <BrandContainer classOption="section-padding-bottom" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
