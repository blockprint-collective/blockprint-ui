const getDiversityColor = (percentage: number) => {
  switch (true) {
      case percentage >= 50:
          return 'bg-error'
      case percentage >= 33:
          return 'bg-fair';
      case percentage >= 0:
          return 'bg-good';

  }
}

export default getDiversityColor