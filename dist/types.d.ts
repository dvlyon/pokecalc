import React from 'react';
import { IStyledComponent } from 'styled-components';

interface ITeraRaidCalc {
    Box?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    Title?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    Form?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    Result?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    Label?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
    Select?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;
    Option?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;
    Button?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
    SubTitle?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    List?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
    ListItem?: IStyledComponent<"web", React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
}
declare const TeraRaidCalc: React.FC<ITeraRaidCalc>;

export { TeraRaidCalc };
