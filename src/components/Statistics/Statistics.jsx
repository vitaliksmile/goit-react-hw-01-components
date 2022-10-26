import PropTypes from 'prop-types';
import { Container, Title, StatList, StatItem } from './Statistics.styled';
const Statistics = props => {
  const { title, stats } = props;
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
