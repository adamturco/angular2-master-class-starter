import { Component, OnInit, Input, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector:'trm-tabs',
    templateUrl: 'tabs.component.html'
})

export class TabsComponent implements AfterContentInit{

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    
    ngAfterContentInit(){
        this.select(this.tabs.first);
    }

    addTab(tab: TabComponent){
        if (this.tabs.length){
            this.select(tab);
        }

        tab.selected = true;
    }

    select(tab: TabComponent){
        this.tabs.forEach(tab => tab.selected = false)
        tab.selected = true;
    }
}