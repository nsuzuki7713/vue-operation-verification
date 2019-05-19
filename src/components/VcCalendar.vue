<template>
  <div class="wrapper-calendar">
    <div>
      <div>シンプルなカレンダ</div>
      <vc-calendar />
    </div>
    
    <div>
      <div>フルスクリーンになるカレンダ</div>      
      <vc-calendar is-expanded/>
    </div>

    <div>
      <div>縦に複数月が並ぶ</div>
      <vc-calendar :rows="2" />
    </div>

    <div>
      <div>横に複数月が並ぶ</div>
      <vc-calendar :columns=2 />
    </div>

    <div>
      <div>レスポンスな対応</div>
      <vc-calendar
        :columns="$screens({ default: 1, lg: 2 })"
        :rows="$screens({ default: 1, lg: 2 })"
        :is-expanded="$screens({ default: true, lg: false })"
      />
    </div>

    <div>
      <div>本日日がハイライトされている</div>
      <vc-calendar :attributes='attributes'/>
      {{attributes[0].dates}}
    </div>

    <div>
      <div>複数日をハイライトされている</div>
      <vc-calendar :attributes='attributes2'/>
    </div>

    <div>
      <div>土日をハイライトする</div>
      <vc-calendar :attributes='attributes3'/>
    </div>

    <div>
      <div>popupの表示</div>
      <vc-calendar :attributes='attributes4'/>
    </div>

    <div>
      <div>day-content5</div>
      <vc-calendar :attributes='attributes5' style="width:500px;" color="red">
        <template slot='header-title' slot-scope='page'>
          {{page.yearLabel}}年{{page.monthLabel}}
        </template>
        <template slot='day-content' slot-scope='props'>
          <div class="vc-day-content">
            <div v-bind:style="addStyleTextColor(props.day.weekday)">{{ props.day.day }}</div>
          </div>
          <div v-if="props.day.day % 2 ==0" style="text-align:center;color:red"><img src="../assets/gatsby.svg"></div>
          <div v-else style="text-align:center"><img src="../assets/slack.svg"></div>
        </template>
      </vc-calendar>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      myDate: null,
      attributes: [
        {
          key: "today",
          highlight: true,
          dates: new Date()
        }
      ],
      attributes2: [
        {
          highlight: true,
          dates: [
            { start: new Date(2019, 4, 1), end: new Date(2019, 4, 5) },
            { start: new Date(2019, 4, 15), span: 5 }
          ]
        }
      ],
      attributes3: [
        {
          highlight: true,
          dates: {
            start: new Date(2019, 0, 1), // Jan 1st, 2018
            end: new Date(2020, 0, 1), // Jan 1st, 2019
            weekdays: [1, 7] // ...on Sundays and Saturdays}
          }
        }
      ],
      attributes4: [
        {
          key: "today",
          highlight: true,
          popover: {
            label: "ここに色々書ける"
          },
          dates: new Date()
        }
      ],
      attributes5: [
        {
          key: "today",
          dates: new Date()
        }
      ]
    };
  },
  methods: {
    addStyleTextColor: function(weekday) {
      if (weekday === 1) {
        return {
          color: "red"
        };
      } else if (weekday === 7) {
        return {
          color: "#00c0ff"
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper-calendar {
  text-align: left;
}
</style>
