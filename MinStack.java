class MinStack {
    int minValue;
    Stack<Map<String, Integer>> stack;
    public MinStack() {
        stack = new Stack<Map<String, Integer>>();
        minValue = Integer.MAX_VALUE;
    }
    
    public void push(int val) {
        if (val <= minValue) {
            minValue = val;
        }
        Map<String, Integer> map = new HashMap<>();
        map.put("val", val);
        map.put("minVal", minValue);
        stack.push(map);
    }
    
    public void pop() {
        stack.pop();
        minValue = stack.empty() ? Integer.MAX_VALUE : stack.peek().get("minVal");
    }
    
    public int top() {
        return stack.peek().get("val");
    }
    
    public int getMin() {
        return minValue;
    }
}



/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
