function enough(cap, on, wait) {
    let total = on + wait;
    if(total > cap) {
        return total - cap;
    } else {
        return 0;
    }
    }

  console.log(enough(100, 60, 50))
  console.log(enough(20, 5, 5))
  console.log(enough(10, 5, 5))