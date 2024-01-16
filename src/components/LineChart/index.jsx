import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { StyledLineChartContainer } from './styled';

const LineChart = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && data.length > 0 && d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll('*').remove();

      const margin = { top: 20, right: 0, bottom: 0, left: 0 };
      const width = 680;
      const height = 449 - margin.top;

      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => new Date(d.time * 1000)))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.volume)])
        .range([height, 0]);

      const line = d3
        .line()
        .x((d) => x(new Date(d.time * 1000)))
        .y((d) => y(d.volume));

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);

      svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));
      svg.append('g').attr('transform', `translate(-1, 0)`).call(d3.axisRight(y));
    }
  }, [data]);

  return (
    <StyledLineChartContainer>
      {data && data.length > 0 ? (
        <svg width={680} height={449} ref={d3Container} />
      ) : (
        <p>This coin has no exchange volume data :(</p>
      )}
    </StyledLineChartContainer>
  );
};

export default React.memo(LineChart);
