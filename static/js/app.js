function init() {
    console.log("obo");
    // var dropdownMenu = d3.select("#selDataset");
      d3.json("../../Resources/samples.json").then(data => {
            // console.log(data);
            console.log("bob");
          // Fill out dropdown menu
        //   sampleID = data.names;
        //   //for each loop... for each i in the list found in data.names (aka sampleID), append the value (ex: 940), as text, to the bottom of the "options" in the dropdown list
        //   sampleID.forEach((i)=>{dropdownMenu.append("option").text(i).property("value");
        //   })

        // //   demographics(sampleID[0]);
        //   charts(sampleID[0]);
        // //   gauge(sampleID[0]);
      })};

    //   function charts (userInput){
    //     d3.csv("../../Resources/F1_Constructor_Standings.csv").then(data => {
        //     console.log(data);
        //   chartSamples = data.samples;
        //   selected = chartSamples.filter((record)=>record.id == userInput);
        //   firstID = selected[0];
      
        //   //BAR CHART
        //   let barChart = [{
        //       type: "bar",
        //       x: firstID.sample_values.slice(0,10).reverse(),
        //       y: firstID.otu_ids.map(j=>`otu ${j}`).slice(0,10).reverse(),
        //       text: firstID.otu_labels.slice(0,10).reverse(),
        //       orientation: 'h'
        //   }];
      
        //   let barLayout = {
        //     title: { text: `Top 10 OTUs for Sample ${userInput}` },
        //     margin: {
        //       t: 23,
        //     },
        //     xaxis: {
        //       title: {
        //         text: "Read Counts"
        //       }
        //     },
        //     yaxis: {
        //       title: {
        //         text: "OTU IDs"
        //       }
        //     }
        //   };
      
        //   let barConfig = {responsive: true}
      
        //   Plotly.newPlot("bar", barChart, barLayout, barConfig);
      
          
      
    //     }
    // )};

    init();