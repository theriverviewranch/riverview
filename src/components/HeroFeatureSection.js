import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import Feature from './Feature';

export default class HeroFeatureSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let align_x = _.get(section, 'align', null) || 'center';
        let padding_top = _.get(section, 'padding_top', null) || 'medium';
        let padding_bottom = _.get(section, 'padding_bottom', null) || 'medium';
        let bg_color = _.get(section, 'background_color', null) || 'none';
        let bg_img_opacity_pct = _.get(section, 'background_image_opacity', null) || 100;
        let bg_img_opacity = bg_img_opacity_pct * 0.01;
        let bg_img_size = _.get(section, 'background_image_size', null) || 'cover';
        let bg_img_position = _.get(section, 'background_image_position', null) || 'center center';
        let bg_img_repeat = _.get(section, 'background_image_repeat', null) || 'no-repeat';
        let feature_padding_y = _.get(section, 'feature_padding_vert', null) || 'medium';
        return (
            <section className={classNames('section', 'features', {'has-border': _.get(section, 'has_border', null), 'has-cover': _.get(section, 'background_image', null), 'bg-none': bg_color === 'none', 'bg-primary': bg_color === 'primary', 'bg-secondary': bg_color === 'secondary', 'pt-4': padding_top === 'small', 'pt-6': (padding_top === 'medium') || (padding_top === 'large'), 'pt-md-7': padding_top === 'large', 'pb-4': padding_bottom === 'small', 'pb-6': (padding_bottom === 'medium') || (padding_bottom === 'large'), 'pb-md-7': padding_bottom === 'large'})}>
            	{_.get(section, 'background_image', null) && (
            	<div className="cover-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + '; background-size: ' + bg_img_size + '; background-repeat: ' + bg_img_repeat + '; background-position: ' + bg_img_position)}/>
            	)}
            	{(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
            	<div className={classNames('container', 'container--medium', {'mb-5': (feature_padding_y === 'small') || (feature_padding_y === 'medium'), 'mb-4': feature_padding_y === 'large', 'text-center': align_x === 'center', 'text-right': align_x === 'right'})}>
            		{_.get(section, 'subtitle', null) && (
            		<div className="section__subtitle">{_.get(section, 'subtitle', null)}</div>
            		)}
            		{_.get(section, 'title', null) && (
            		<h1 className="section__title mt-0">{_.get(section, 'title', null)}</h1>
            		)}
            	</div>
            	)}
            	{_.get(section, 'features', null) && (
            	<div className="container">
            		{_.map(_.get(section, 'features', null), (feature, feature_idx) => (
            			<Feature key={feature_idx} {...this.props} section={section} feature={feature} />
            		))}
            	</div>
            	)}
            </section>
        );
    }
}
