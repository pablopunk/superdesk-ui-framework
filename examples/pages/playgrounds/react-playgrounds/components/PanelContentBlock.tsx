import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    flex?: boolean;
    padding?: '0' | '1-5' | '3'; // Padding overrides based on the $sd-base-increment of 8 pixels (e.g. 1-5 equals 12 pixels etc.). Defaults to 2 (16 pixels) without specifiying a value.
    className?: string;
}

export class PanelContentBlock extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('side-panel__content-block', this.props.className, {
            'side-panel__content-block--flex': this.props.flex,
            [`side-panel__content-block--padding-${this.props.padding}`]: this.props.padding,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

